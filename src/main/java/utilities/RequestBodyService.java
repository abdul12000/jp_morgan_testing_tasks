package utilities;

import com.jayway.jsonpath.DocumentContext;
import step_defs.BaseSteps;

public class RequestBodyService extends BaseSteps {
    public void setRequestBodyForNewPost(DocumentContext requestBody, String uId, String title, String body){
        requestBody.set("userId", uId);
        requestBody.set("title", title);
        requestBody.set("body", body);
        setRequestBody(requestBody);
    }

    public void setRequestBodyForNewComment(DocumentContext requestBody, String postId, String name, String email, String body){
        requestBody.set("postId", postId);
        requestBody.set("name", name);
        requestBody.set("email", email);
        requestBody.set("body", body);
        setRequestBody(requestBody);
    }
}
