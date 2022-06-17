.PHONY: test coverage

deps: .deps-api .deps-webapp

down:
	docker-compose down

up: .up-api .up-webapp

test: .test-api .test-webapp

coverage: .test-api .test-webapp

.deps-api:
	docker-compose run --rm -v "${PWD}/api:/opt/app" node npm install

.deps-webapp:
	docker-compose run --rm -v "${PWD}/webapp:/opt/app" node npm install

.up-api: .deps-api
	docker-compose up -d api

.up-webapp: .deps-webapp
	docker-compose up -d app

.test-api: .deps-api
	docker-compose run --rm -v "${PWD}/api:/opt/app" -e CI=true node npm run test

.test-webapp: .deps-webapp
	docker-compose run --rm -v "${PWD}/webapp:/opt/app" -e CI=true node npm run test
