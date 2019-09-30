$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BackendServiceTestingTask.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Backend Service Testing Task"
    },
    {
      "line": 4,
      "value": "#  Imagine you are building a social network. Starting from simple functionality. Users are now able to make posts and comment on them. You are working in the backend team that exposes the service: https://jsonplaceholder.typicode.com/ which has the following endpoints: 1.  1. Make posts: https://jsonplaceholder.typicode.com/posts 2. Comment on posts: https://jsonplaceholder.typicode.com/comments"
    },
    {
      "line": 5,
      "value": "#  3. List of users: https://jsonplaceholder.typicode.com/users"
    },
    {
      "line": 6,
      "value": "#  Using Rest-Assured, Cucumber, and Java, create a few scenarios to test this functionality"
    }
  ],
  "line": 8,
  "name": "1. Test that existing posts can be retrieved with GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search for \"\u003cid\u003e\" of a post",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get the correct \"\u003cid\u003e\", \"\u003ctitle\u003e\" and \"\u003cbody\u003e\" returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;",
  "rows": [
    {
      "cells": [
        "id",
        "title",
        "body"
      ],
      "line": 13,
      "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;1"
    },
    {
      "cells": [
        "1",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      ],
      "line": 14,
      "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;2"
    },
    {
      "cells": [
        "5",
        "nesciunt quas odio",
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      ],
      "line": 15,
      "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;3"
    },
    {
      "cells": [
        "30",
        "a quo magni similique perferendis",
        "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
      ],
      "line": 16,
      "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "1. Test that existing posts can be retrieved with GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search for \"1\" of a post",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get the correct \"1\", \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\" and \"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto\" returned",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 4058757501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:30"
});
formatter.result({
  "duration": 301232900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "offset": 31
    },
    {
      "val": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "offset": 112
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:38"
});
formatter.result({
  "duration": 845563700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "1. Test that existing posts can be retrieved with GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search for \"5\" of a post",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get the correct \"5\", \"nesciunt quas odio\" and \"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque\" returned",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 175510901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:30"
});
formatter.result({
  "duration": 169427199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    },
    {
      "val": "nesciunt quas odio",
      "offset": 31
    },
    {
      "val": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "offset": 56
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:38"
});
formatter.result({
  "duration": 65922000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "1. Test that existing posts can be retrieved with GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retrieved-with-get-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search for \"30\" of a post",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get the correct \"30\", \"a quo magni similique perferendis\" and \"alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia\" returned",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 161105800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:30"
});
formatter.result({
  "duration": 159093500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 26
    },
    {
      "val": "a quo magni similique perferendis",
      "offset": 32
    },
    {
      "val": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
      "offset": 72
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:38"
});
formatter.result({
  "duration": 37775101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "2. Test that New posts can be created with a POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i create a new post with the following details \"\u003cuId\u003e\", \"\u003ctitle\u003e\" and \"\u003cbody\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the correct \"\u003cuId\u003e\", \"\u003ctitle\u003e\" and \"\u003cbody\u003e\" returned with a new ID in the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;",
  "rows": [
    {
      "cells": [
        "uId",
        "title",
        "body"
      ],
      "line": 23,
      "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;;1"
    },
    {
      "cells": [
        "1001",
        "my first title",
        "my first body to test with"
      ],
      "line": 24,
      "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;;2"
    },
    {
      "cells": [
        "1022",
        "my second title",
        "my second body to test with"
      ],
      "line": 25,
      "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "2. Test that New posts can be created with a POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i create a new post with the following details \"1001\", \"my first title\" and \"my first body to test with\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the correct \"1001\", \"my first title\" and \"my first body to test with\" returned with a new ID in the response",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 149615700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 48
    },
    {
      "val": "my first title",
      "offset": 56
    },
    {
      "val": "my first body to test with",
      "offset": 77
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:47"
});
formatter.result({
  "duration": 512639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 26
    },
    {
      "val": "my first title",
      "offset": 34
    },
    {
      "val": "my first body to test with",
      "offset": 55
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:56"
});
formatter.result({
  "duration": 41272300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "2. Test that New posts can be created with a POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-a-post-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i create a new post with the following details \"1022\", \"my second title\" and \"my second body to test with\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the correct \"1022\", \"my second title\" and \"my second body to test with\" returned with a new ID in the response",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 159619301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1022",
      "offset": 48
    },
    {
      "val": "my second title",
      "offset": 56
    },
    {
      "val": "my second body to test with",
      "offset": 78
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:47"
});
formatter.result({
  "duration": 351051600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1022",
      "offset": 26
    },
    {
      "val": "my second title",
      "offset": 34
    },
    {
      "val": "my second body to test with",
      "offset": 56
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:56"
});
formatter.result({
  "duration": 32744599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "3. Test that existing comments can be retrieved with GET request",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "i search for comment with \"\u003cid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the correct \"\u003cid\u003e\", \"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\" are returned in the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "body"
      ],
      "line": 32,
      "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;;1"
    },
    {
      "cells": [
        "4",
        "alias odio sit",
        "Lew@alysha.tv",
        "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      ],
      "line": 33,
      "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;;2"
    },
    {
      "cells": [
        "10",
        "eaque et deleniti atque tenetur ut quo ut",
        "Carmen_Keeling@caroline.name",
        "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
      ],
      "line": 34,
      "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "3. Test that existing comments can be retrieved with GET request",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "i search for comment with \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the correct \"4\", \"alias odio sit\", \"Lew@alysha.tv\" and \"non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati\" are returned in the response",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 157181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:65"
});
formatter.result({
  "duration": 139803300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 13
    },
    {
      "val": "alias odio sit",
      "offset": 18
    },
    {
      "val": "Lew@alysha.tv",
      "offset": 36
    },
    {
      "val": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
      "offset": 56
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:71"
});
formatter.result({
  "duration": 42868700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "3. Test that existing comments can be retrieved with GET request",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retrieved-with-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "i search for comment with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the correct \"10\", \"eaque et deleniti atque tenetur ut quo ut\", \"Carmen_Keeling@caroline.name\" and \"voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis\" are returned in the response",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 165418500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:65"
});
formatter.result({
  "duration": 157196800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "eaque et deleniti atque tenetur ut quo ut",
      "offset": 19
    },
    {
      "val": "Carmen_Keeling@caroline.name",
      "offset": 64
    },
    {
      "val": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
      "offset": 99
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:71"
});
formatter.result({
  "duration": 40384900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "4. Test that new comments can be added to a post",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-added-to-a-post",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "i create a new comment on a \"\u003cpostId\u003e\" with \"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should get the correct \"\u003cpostId\u003e\", \"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\" created with a new ID in the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-added-to-a-post;",
  "rows": [
    {
      "cells": [
        "postId",
        "name",
        "email",
        "body"
      ],
      "line": 41,
      "id": ";4.-test-that-new-comments-can-be-added-to-a-post;;1"
    },
    {
      "cells": [
        "1001",
        "Lateef AbdulA",
        "lateefAbdula@yahoo.com",
        "my first comment for this post to test with"
      ],
      "line": 42,
      "id": ";4.-test-that-new-comments-can-be-added-to-a-post;;2"
    },
    {
      "cells": [
        "1022",
        "Lateef AbdulBB",
        "lateefAbdulbb@yahoo.com",
        "my second  comment for this post to test with"
      ],
      "line": 43,
      "id": ";4.-test-that-new-comments-can-be-added-to-a-post;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "4. Test that new comments can be added to a post",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-added-to-a-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "i create a new comment on a \"1001\" with \"Lateef AbdulA\", \"lateefAbdula@yahoo.com\" and \"my first comment for this post to test with\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should get the correct \"1001\", \"Lateef AbdulA\", \"lateefAbdula@yahoo.com\" and \"my first comment for this post to test with\" created with a new ID in the response",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 158881400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 29
    },
    {
      "val": "Lateef AbdulA",
      "offset": 41
    },
    {
      "val": "lateefAbdula@yahoo.com",
      "offset": 58
    },
    {
      "val": "my first comment for this post to test with",
      "offset": 87
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:80"
});
formatter.result({
  "duration": 367787700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 26
    },
    {
      "val": "Lateef AbdulA",
      "offset": 34
    },
    {
      "val": "lateefAbdula@yahoo.com",
      "offset": 51
    },
    {
      "val": "my first comment for this post to test with",
      "offset": 80
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:90"
});
formatter.result({
  "duration": 39408200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "4. Test that new comments can be added to a post",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-added-to-a-post;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "i create a new comment on a \"1022\" with \"Lateef AbdulBB\", \"lateefAbdulbb@yahoo.com\" and \"my second  comment for this post to test with\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should get the correct \"1022\", \"Lateef AbdulBB\", \"lateefAbdulbb@yahoo.com\" and \"my second  comment for this post to test with\" created with a new ID in the response",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 162480500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1022",
      "offset": 29
    },
    {
      "val": "Lateef AbdulBB",
      "offset": 41
    },
    {
      "val": "lateefAbdulbb@yahoo.com",
      "offset": 59
    },
    {
      "val": "my second  comment for this post to test with",
      "offset": 89
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:80"
});
formatter.result({
  "duration": 392975101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1022",
      "offset": 26
    },
    {
      "val": "Lateef AbdulBB",
      "offset": 34
    },
    {
      "val": "lateefAbdulbb@yahoo.com",
      "offset": 52
    },
    {
      "val": "my second  comment for this post to test with",
      "offset": 82
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:90"
});
formatter.result({
  "duration": 38491501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "5. Test that existing Users can be retrieved with GET request",
  "description": "",
  "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "i search for a user with \"\u003cid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the correct id, \"\u003cname\u003e\", \"\u003cusername\u003e\", \"\u003cemail\u003e\", \"\u003caddress_Line1\u003e\", \"\u003czipcode\u003e\", \"\u003cphone\u003e\", \"\u003cwebsite\u003e\" and \"\u003ccompanyName\u003e\" are returned in the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "username",
        "email",
        "address_Line1",
        "zipcode",
        "phone",
        "website",
        "companyName"
      ],
      "line": 50,
      "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;;1"
    },
    {
      "cells": [
        "5",
        "Chelsey Dietrich",
        "Kamren",
        "Lucio_Hettinger@annie.ca",
        "Skiles Walks",
        "33263",
        "(254)954-1289",
        "demarco.info",
        "Keebler LLC"
      ],
      "line": 51,
      "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;;2"
    },
    {
      "cells": [
        "10",
        "Clementina DuBuque",
        "Moriah.Stanton",
        "Rey.Padberg@karina.biz",
        "Kattie Turnpike",
        "31428-2261",
        "024-648-3804",
        "ambrose.net",
        "Hoeger LLC"
      ],
      "line": 52,
      "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "5. Test that existing Users can be retrieved with GET request",
  "description": "",
  "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "i search for a user with \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the correct id, \"Chelsey Dietrich\", \"Kamren\", \"Lucio_Hettinger@annie.ca\", \"Skiles Walks\", \"33263\", \"(254)954-1289\", \"demarco.info\" and \"Keebler LLC\" are returned in the response",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 164626099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:99"
});
formatter.result({
  "duration": 144384600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chelsey Dietrich",
      "offset": 17
    },
    {
      "val": "Kamren",
      "offset": 37
    },
    {
      "val": "Lucio_Hettinger@annie.ca",
      "offset": 47
    },
    {
      "val": "Skiles Walks",
      "offset": 75
    },
    {
      "val": "33263",
      "offset": 91
    },
    {
      "val": "(254)954-1289",
      "offset": 100
    },
    {
      "val": "demarco.info",
      "offset": 117
    },
    {
      "val": "Keebler LLC",
      "offset": 136
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:107"
});
formatter.result({
  "duration": 88720300,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "5. Test that existing Users can be retrieved with GET request",
  "description": "",
  "id": ";5.-test-that-existing-users-can-be-retrieved-with-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestsToRun"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "i search for a user with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the correct id, \"Clementina DuBuque\", \"Moriah.Stanton\", \"Rey.Padberg@karina.biz\", \"Kattie Turnpike\", \"31428-2261\", \"024-648-3804\", \"ambrose.net\" and \"Hoeger LLC\" are returned in the response",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackendServiceTestingTaskSteps.java:21"
});
formatter.result({
  "duration": 142986600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:99"
});
formatter.result({
  "duration": 148728000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clementina DuBuque",
      "offset": 17
    },
    {
      "val": "Moriah.Stanton",
      "offset": 39
    },
    {
      "val": "Rey.Padberg@karina.biz",
      "offset": 57
    },
    {
      "val": "Kattie Turnpike",
      "offset": 83
    },
    {
      "val": "31428-2261",
      "offset": 102
    },
    {
      "val": "024-648-3804",
      "offset": 116
    },
    {
      "val": "ambrose.net",
      "offset": 132
    },
    {
      "val": "Hoeger LLC",
      "offset": 150
    }
  ],
  "location": "BackendServiceTestingTaskSteps.java:107"
});
formatter.result({
  "duration": 79233199,
  "status": "passed"
});
});