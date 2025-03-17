from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as gemini
import base64
from io import BytesIO
from PIL import Image
import re
import json

api_key = "AIzaSyBfnGKTOg1aBcG4TnU4nbJPIOKwMd01nf0"
gemini.configure(api_key=api_key)

app = FastAPI()

class AnalyzeRequest(BaseModel):
    name: str
    gender: str
    age: int
    issue: str
    object: str
    issue: str

@app.post("/process")
async def process_food(request: AnalyzeRequest):
    image_data = base64.b64decode(request.image)
    image = Image.open(BytesIO(image_data))

    response = gemini.GenerativeModel("gemini-2.0-flash").generate_content([
        image, "식품에 들어간 재료들을 나열하고, 해당 성분을 일반인이 알기 쉽게 설명해주세요."
    ])

    analysis_response = gemini.GenerativeModel("gemini-2.0-flash").generate_content([
        f"""
        [사용자 정보]
        - 이름: {request.name}
        - 성별: {request.gender}
        - 나이: {request.age}
        - 건강 상태(질병 및 알레르기): {request.issue}
        - 목표: {request.object}

        [제품 성분표]
        {response.text}

        [요청]
        아래 요구사항을 **JSON 형식**으로 출력해주세요.

        1. **제품의 원재료 및 각 성분 설명**
        ```json
        {{"성분명": {{"설명": "해당 성분이 어떤 역할을 하는지 쉽게 설명", "출처": "천연 / 합성 여부 등"}}}}
        2. 사용자의 건강 상태와 목표에 따른 성분 궁합도 분석
        {{
          "긍정적인 부분": {{"성분명": "설명"}},
          "주의해야 할 부분": {{"성분명": "설명"}},
          "전반적인 평가": "전체적인 요약 및 추천 사항"
        }}
        3. 사용자의 연령대에서 주의해야 할 성분 분석
        {{
          "사용자의 연령대에 주의해야 할 성분": {{"성분명": "설명"}},
          "추가 조언": "영양 섭취 시 고려해야 할 사항"
        }}
        """
    ])

    cleaned_response = re.sub(r'```json|```', '', analysis_response.text).strip()

    ingredients = extract_ingredients(cleaned_response)
    compatibility = extract_compatibility(cleaned_response)
    age_warning = extract_age_warning(cleaned_response)

    result_data = {
        "ingredients": ingredients,
        "compatibility": compatibility,
        "age_warning": age_warning
    }

    return result_data


def extract_ingredients(response_text: str):
    try:
        data = json.loads(response_text)
        ingredients = data.get("원재료 및 성분 설명", {})

        ingredients_parsed = []
        for ingredient, details in ingredients.items():
            description = details.get("설명", "설명 없음")
            source = details.get("출처", "출처 없음")
            ingredients_parsed.append({"ingredient_name": ingredient, "description": description, "source": source})

        return ingredients_parsed

    except Exception as e:
        return {"error": str(e)}


def extract_compatibility(response_text: str):
    try:
        data = json.loads(response_text)
        compatibility = data.get("성분 궁합도 분석", {})

        compatibility_parsed = {
            "positive": compatibility.get("긍정적인 부분", {}),
            "negative": compatibility.get("주의해야 할 부분", {}),
            "evaluation": compatibility.get("전반적인 평가", "평가 없음")
        }

        return compatibility_parsed

    except Exception as e:
        return {"error": str(e)}


def extract_age_warning(response_text: str):
    try:
        data = json.loads(response_text)
        age_warning = data.get("연령대 주의 성분 분석", {})

        age_warning_parsed = {
            "age_warning": age_warning.get("사용자의 연령대에 주의해야 할 성분", {}),
            "advice": age_warning.get("추가 조언", "추가 조언 없음")
        }

        return age_warning_parsed

    except Exception as e:
        return {"error": str(e)}
