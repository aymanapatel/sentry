# Sentry PoC
PoC on using Sentry as Error monitoring for different platforms

# Code Snippet

> After configuring dsn, the following snippets are used to throw Error to Sentry

## Java Example 

### Spring Boot

```java
import io.sentry.Sentry;

try {
  throw new Exception("This is a test.");
} catch (Exception e) {
  Sentry.captureException(e);
}
```


### Log4j2

- `Log4j2.xml`


```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="warn" packages="org.apache.logging.log4j.core,io.sentry.log4j2">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
        </Console>
        <Sentry name="Sentry"
                dsn="https://0c1c40d6eac741f8b8d30b21df84e9fb@o1102399.ingest.sentry.io/6128645" />
    </Appenders>
    <Loggers>
        <Root level="info">
            <AppenderRef ref="Sentry"/>
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

- Java


```java
import io.sentry.Sentry;

try {
  throw new Exception("This is a test.");
} catch (Exception e) {
  Sentry.captureException(e);
}
```


## Serverless

### AWS Lambda (Node)

```javascript
// Sentry Init DSN Code
exports.handler = Sentry.AWSLambda.wrapHandler(() => {
  return Promise.allSettled([
        Promise.rejected(new Error('first')),
        Promise.rejected(new Error('second')),
  ]);
}, { captureAllSettledReasons: true });
// `first` and `second` errors are captured
```





## Frontend Example 

### React

```javascript
return <button onClick={methodDoesNotExist}>Break the world</button>;   
```


### Next.js


```javascript
import { withSentry } from "@sentry/nextjs";

const handler = async (req, res) => {
  throw new Error("API throw error test");
  res.status(200).json({ name: "John Doe" });
};

export default withSentry(handler);

```

