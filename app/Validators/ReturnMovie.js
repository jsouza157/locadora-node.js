'use strict'

class ReturnMovie {
  get rules () {
    return {
      movie_id: 'required'
    }
  }

  get messages () {
    return {
      'movie_id.required': 'You must provide a movie_id.'
    }
  }
}

module.exports = ReturnMovie
