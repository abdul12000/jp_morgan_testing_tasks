package step_defs;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;

import io.restassured.RestAssured;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.response.Response;

import java.net.MalformedURLException;
import java.net.URL;

public class BaseSteps {
    public String serviceURL, makePostEndpoint, commentOnPostEndpoint, listOfUsersEndpoint;
    public String MakeAPostPayload, CommentOnPostPayload;
    public String endpointPath;
    public Headers headers;
    public Response response;
    public DocumentContext requestBodyJson;

    public BaseSteps() {
        MakeAPostPayload = "/templates/MakeAPostPayload.json";
        CommentOnPostPayload = "/templates/CommentOnAPost.json";

    }

    public void populateRequiredData() {
        serviceURL = "https://jsonplaceholder.typicode.com/";
        makePostEndpoint = serviceURL + "posts/";
        commentOnPostEndpoint = serviceURL + "comments/";
        listOfUsersEndpoint = serviceURL + "users/";
    }

    public Response getResponse(){
        return response;
    }

    public void setHeaders(Headers value) {
        resetHeaders();
        headers = value;
    }

    public void resetHeaders() {
        headers = null;
    }

    public void setHeadersWithAppJson() {
        headers = new Headers(
                new Header("Content-Type", "application/json"));
        setHeaders(headers);
    }

    public void setEndpointPath(String endpointPath) {
        this.endpointPath = endpointPath;
    }

    protected URL getURL() {
        try {
            return new URL(endpointPath);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }

    }

    public Response getCall() {
        response = RestAssured.given()
                .log().all()
                .relaxedHTTPSValidation()
                .headers(headers)
                .when()
                .get(getURL())
                .then()
                .log().all()
                .extract()
                .response();
        return response;
    }

    public Response getCallNoHeader() {
        response = RestAssured.given()
                .log().all()
                .relaxedHTTPSValidation()
                .when()
                .get(getURL())
                .then()
                .log().all()
                .extract()
                .response();
        return response;
    }
    public Response postCallWithjSonBody() {
        response = RestAssured.given()
                .log().all()
                .relaxedHTTPSValidation()
                .headers(headers)
                .body(requestBodyJson.jsonString())
                .when().post(getURL())
                .then()
                .log().all()
                .extract()
                .response();
        return response;

    }

    public DocumentContext loadJsonTemplate(String path){
        requestBodyJson = JsonPath.parse(this.getClass().getResourceAsStream(path));
        return requestBodyJson;
    }

    public DocumentContext getRequestBodyJson() {
        return requestBodyJson;
    }
    public void setRequestBody(DocumentContext requestBody){this.requestBodyJson = requestBody;}
}


