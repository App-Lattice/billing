# micronaut-service-template

Use this to create a new service for micronaut project.

## Usage

### Update micronaut-protos
The micronaut-protos dir is actually a git repo that contains all the protobufs for the system. This is so the code (especially types) generated using `grpc_tools` command can be used cross-service for the application.
```
cd micronaut-protos; git pull origin main
```

must have dotenv-cli installed globally:
```
npm i dotenv-cli -g     
```

migrate for `.evn.whatever`
```
dotenv -e .env.test -- ./node_modules/.bin/prisma migrate dev
```
