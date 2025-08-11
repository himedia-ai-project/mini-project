# mini-project

이 저장소는 백엔드(Spring Boot & FastAPI), 프론트엔드(React/Next.js), 데이터베이스(MySQL 등)를 Docker 기반으로 통합 관리하는 미니 프로젝트입니다.

## 폴더 구조 및 주요 기능

### 1. back (백엔드)
- Spring Boot 기반의 Java 백엔드 프로젝트
- `fastapi` 폴더: Python FastAPI 기반의 API 서버도 포함 가능
- 주요 파일: `build.gradle`, `settings.gradle`, `Dockerfile`, `src/`
- 역할: REST API 제공, 데이터 처리, 비즈니스 로직 담당

### 2. front (프론트엔드)
- React(또는 Next.js) 기반의 프론트엔드 프로젝트
- 주요 파일: `package.json`, `next.config.ts`, `tsconfig.json`, `Dockerfile`, `src/`
- 역할: 사용자 인터페이스(UI), API 연동, 화면 렌더링

### 3. db (데이터베이스)
- 데이터베이스 컨테이너 및 초기화 스크립트 관리
- 주요 파일: `Dockerfile`, `food.sql`
- 역할: 데이터 저장, 쿼리, 초기 데이터 세팅

### 4. docker-compose.yml
- 전체 서비스(백엔드, 프론트엔드, DB)를 한 번에 실행하는 오케스트레이션 파일

## 개발 및 실행 방법

1. Docker와 Docker Compose가 설치되어 있어야 합니다.
2. 루트 디렉토리에서 아래 명령어로 모든 서비스를 실행할 수 있습니다.

```bash
docker-compose up --build
```

3. 각 서비스는 컨테이너로 실행되며, 네트워크로 상호 연동됩니다.

## 협업 가이드
- 새로운 기능 추가 시 각 폴더별로 관리해 주세요.
- 코드 작성 시 일관된 스타일과 네이밍 규칙을 지켜주세요.
- PR 작성 시 변경점과 목적을 명확히 남겨주세요.
- 이슈(버그, 개선사항 등)는 GitHub Issues를 적극 활용해 주세요.

---

궁금한 점이나 추가 설명이 필요하면 언제든 이슈로 남겨주세요!
