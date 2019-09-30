
Feature:
#  Backend Service Testing Task
#  Imagine you are building a social network. Starting from simple functionality. Users are now able to make posts and comment on them. You are working in the backend team that exposes the service: https://jsonplaceholder.typicode.com/ which has the following endpoints: 1.  1. Make posts: https://jsonplaceholder.typicode.com/posts 2. Comment on posts: https://jsonplaceholder.typicode.com/comments
#  3. List of users: https://jsonplaceholder.typicode.com/users
#  Using Rest-Assured, Cucumber, and Java, create a few scenarios to test this functionality

  Scenario Outline: 1. Test that existing posts can be retrieved with GET request
    Given service is up and running
    When i search for "<id>" of a post
    Then I should get the correct "<id>", "<title>" and "<body>" returned
    Examples:
      | id | title                                                                      | body                                                                                                                                                              |
      | 1  | sunt aut facere repellat provident occaecati excepturi optio reprehenderit | quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto |
      | 5  | nesciunt quas odio                                                         | repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque            |
      | 30 | a quo magni similique perferendis                                          | alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia                   |


  Scenario Outline: 2. Test that New posts can be created with a POST request
    Given service is up and running
    When i create a new post with the following details "<uId>", "<title>" and "<body>"
    Then I should get the correct "<uId>", "<title>" and "<body>" returned with a new ID in the response
    Examples:
      | uId  | title           | body                        |
      | 1001 | my first title  | my first body to test with  |
      | 1022 | my second title | my second body to test with |


  Scenario Outline: 3. Test that existing comments can be retrieved with GET request
    Given service is up and running
    When i search for comment with "<id>"
    Then the correct "<id>", "<name>", "<email>" and "<body>" are returned in the response
    Examples:
      | id | name                                      | email                        | body                                                                                                                                                                |
      | 4  | alias odio sit                            | Lew@alysha.tv                | non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati       |
      | 10 | eaque et deleniti atque tenetur ut quo ut | Carmen_Keeling@caroline.name | voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis |


  Scenario Outline: 4. Test that new comments can be added to a post
    Given service is up and running
    When i create a new comment on a "<postId>" with "<name>", "<email>" and "<body>"
    Then I should get the correct "<postId>", "<name>", "<email>" and "<body>" created with a new ID in the response
    Examples:
      | postId | name           | email                   | body                                          |
      | 1001   | Lateef AbdulA  | lateefAbdula@yahoo.com  | my first comment for this post to test with   |
      | 1022   | Lateef AbdulBB | lateefAbdulbb@yahoo.com | my second  comment for this post to test with |

  @Dev
  Scenario Outline: 5. Test that existing Users can be retrieved with GET request
    Given service is up and running
    When i search for a user with "<id>"
    Then the correct id, "<name>", "<username>", "<email>", "<address_Line1>", "<zipcode>", "<phone>", "<website>" and "<companyName>" are returned in the response
    Examples:
      | id | name               | username       | email                    | address_Line1   | zipcode    | phone         | website      | companyName |
      | 5  | Chelsey Dietrich   | Kamren         | Lucio_Hettinger@annie.ca | Skiles Walks    | 33263      | (254)954-1289 | demarco.info | Keebler LLC |
      | 10 | Clementina DuBuque | Moriah.Stanton | Rey.Padberg@karina.biz   | Kattie Turnpike | 31428-2261 | 024-648-3804  | ambrose.net  | Hoeger LLC  |
