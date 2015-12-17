**MAPPING**

"mappings": {
      "starwars": {
        "properties": {
          "created_at": {
            "type": "string"
          },
          "hashtags": {
            "properties": {
              "indices": {
                "type": "long"
              },
              "text": {
                "type": "string"
              }
            }
          },
          "text": {
            "type": "string"
          },
          "userImg": {
            "type": "string"
          },
          "userName": {
            "type": "string"
          }
        }
      }
    }