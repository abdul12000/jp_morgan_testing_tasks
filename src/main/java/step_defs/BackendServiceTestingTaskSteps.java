package step_defs;

import com.jayway.jsonpath.DocumentContext;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import io.restassured.response.Response;
import utilities.RequestBodyService;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.*;

public class BackendServiceTestingTaskSteps extends BaseSteps implements En {
    private String id_User;
    RequestBodyService requestBodyService;
    DocumentContext requestBody;
    Response responseForPostRequest, responseForGetService, responseForCommentRequest, responseForListOfUsersRequest;

    public BackendServiceTestingTaskSteps() {
        Given("^service is up and running$", () -> {
            populateRequiredData();
            setHeadersWithAppJson();
            setEndpointPath(serviceURL);
            getCall();
            responseForGetService = getResponse();
            assertThat(responseForGetService.statusCode(), is(200));
        });

        When("^i search for \"([^\"]*)\" of a post$", (String id) -> {
            setHeadersWithAppJson();
            setEndpointPath(makePostEndpoint + id);
            getCall();
            responseForPostRequest = getResponse();

        });

        Then("^I should get the correct \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" returned$",
                (String id, String title, String body) -> {
                    assertThat(responseForPostRequest.statusCode(), is(200));
                    assertNotNull(responseForPostRequest.body().jsonPath().get("userId").toString());
                    assertThat(responseForPostRequest.body().jsonPath().get("id").toString().contains(id), is(true));
                    assertThat(responseForPostRequest.body().jsonPath().get("title"), is(title));
                    assertThat(responseForPostRequest.body().jsonPath().get("body").toString(), is(equalTo(body)));

                });
        When("^i create a new post with the following details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$", (String uId, String title, String body) -> {
            requestBodyService = new RequestBodyService();
            setHeadersWithAppJson();
            requestBody = loadJsonTemplate(MakeAPostPayload);
            requestBodyService.setRequestBodyForNewPost(requestBody, uId, title, body);
            setEndpointPath(makePostEndpoint);
            postCallWithjSonBody();
            responseForPostRequest = getResponse();
        });
        Then("^I should get the correct \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" returned with a new ID in the response$", (String uId, String title, String body) -> {
            assertThat(responseForPostRequest.statusCode(), is(201));
            assertNotNull(responseForPostRequest.body().jsonPath().get("id").toString());
            assertThat(responseForPostRequest.body().jsonPath().get("userId").toString().contains(uId), is(true));
            assertThat(responseForPostRequest.body().jsonPath().get("title").toString(), is(equalTo(title)));
            assertThat(responseForPostRequest.body().jsonPath().get("body").toString(), is(equalTo(body)));


        });
        When("^i search for comment with \"([^\"]*)\"$", (String id) -> {
            setHeadersWithAppJson();
            setEndpointPath(commentOnPostEndpoint + id);
            getCall();
            responseForCommentRequest = getResponse();
        });
        Then("^the correct \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" are returned in the response$",
                (String id, String name, String email, String body) -> {
                    assertThat(responseForCommentRequest.statusCode(), is(200));
                    assertNotNull(responseForCommentRequest.body().jsonPath().get("postId").toString());
                    assertThat(responseForCommentRequest.body().jsonPath().get("id").toString().contains(id), is(true));
                    assertThat(responseForCommentRequest.body().jsonPath().get("name").toString(), is(equalTo(name)));
                    assertThat(responseForCommentRequest.body().jsonPath().get("email").toString(), is(equalTo(email)));
                    assertThat(responseForCommentRequest.body().jsonPath().get("body").toString(), is(equalTo(body)));
                });
        When("^i create a new comment on a \"([^\"]*)\" with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$",
                (String postId, String name, String email, String body) -> {
                    requestBodyService = new RequestBodyService();
                    setHeadersWithAppJson();
                    requestBody = loadJsonTemplate(CommentOnPostPayload);
                    requestBodyService.setRequestBodyForNewComment(requestBody, postId, name, email, body);
                    setEndpointPath(commentOnPostEndpoint);
                    postCallWithjSonBody();
                    responseForCommentRequest = getResponse();
                });
        Then("^I should get the correct \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" created with a new ID in the response$",
                (String postId, String name, String email, String body) -> {
                    assertThat(responseForCommentRequest.statusCode(), is(201));
                    assertNotNull(responseForCommentRequest.body().jsonPath().get("id").toString());
                    assertThat(responseForCommentRequest.body().jsonPath().get("postId").toString().contains(postId), is(true));
                    assertThat(responseForCommentRequest.body().jsonPath().get("name").toString(), is(equalTo(name)));
                    assertThat(responseForCommentRequest.body().jsonPath().get("email").toString(), is(equalTo(email)));
                    assertThat(responseForCommentRequest.body().jsonPath().get("body").toString(), is(equalTo(body)));
                });
        When("^i search for a user with \"([^\"]*)\"$", (String id_User) -> {
            this.id_User = id_User;
            setHeadersWithAppJson();
            setEndpointPath(listOfUsersEndpoint + id_User);
            getCall();
            responseForListOfUsersRequest = getResponse();
        });

        Then("^the correct id, \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" are returned in the response$",
                (String name, String username, String email, String addressLine1, String zipcode, String phone, String website, String companyName) -> {
                    assertThat(responseForListOfUsersRequest.statusCode(), is(200));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("id").toString(), is(equalTo(id_User)));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("username").toString(), is(equalTo(username)));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("email").toString(), is(email));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("address.street").toString(), is(addressLine1));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("address.zipcode").toString(), is(zipcode));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("phone").toString(), is(phone));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("website").toString(), is(website));
                    assertThat(responseForListOfUsersRequest.body().jsonPath().get("company.name").toString(), is(companyName));
        });

    }

}