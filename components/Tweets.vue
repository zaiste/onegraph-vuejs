<template>
  <div class="content">
    <h1>My Tweets</h1>
    <ul>
      <li v-for="tweet in tweets">{{ tweet.text }}</li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      tweets: []
    }
  },

  apollo: {
    tweets: {
      query: gql`
        query {
          me {
            twitter {
              name
              timeline(limit: $limit) {
                tweets {
                  text
                }
              }
            }
          }
        }
      `,

      variables: {
        limit: 10
      },

      update: ({ me }) => me.twitter.timeline.tweets
    }
  }
}
</script>
