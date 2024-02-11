# GARAGE APP - SQS

## Objetcives
This project is a basic implementation of AWS SQS consumer and has learning purposes only.
Uses docker and docker compose concepts.

## Environment variables

| Env                   | description           |
|-----------------------|-----------------------|
| AWS_SECRET_ACCESS_KEY | AWS Access key secret |
| AWS_ACCESS_KEY_ID     | AWS Access key id     |
| AWS_REGION            | AWS SQS REGION        |
| AWS_SQS_QUEUE_URL     | AWS QUEUE URL         |
| DB_USER               | Database user         |
| DB_PWD                | Database password     |
| DB_HOST               | Database host         |
| DB_PORT               | Database port         |
| DB_NAME               | Database Name         |

## Run

```bash
npm i
```

```bash
docker build -t garage-sqs-consumer:latest .
```

```shell
cd compose && docker compose up
```

Then, publish a message in the following contract

```json
{
  "customerName":"Arthur Schopenhauer",
  "request":"Service description",
  "price":99.90
}
```
