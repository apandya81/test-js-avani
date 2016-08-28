import fetch from 'fetch-jsonp'
import moment from 'moment'

export function getPopularMovies () {
  return dispatch => {
    const fourStarUrl = 'https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=4'
    const fiveStarUrl = 'https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=5'
    const req1 = fetch(fourStarUrl)
    const req2 = fetch(fiveStarUrl)

    // create variable urls to load both urls and to use for combine both urls as a response
    
    return Promise.all([req1, req2])
      .then(responses => responses.map(res => res.json()))
      .then(jsonPromises => Promise.all(jsonPromises))
      .then(jsonResponses => {
          
          return jsonResponses.movies;
      })
      .catch((error) => {
        console.error(error);
      });
    }
        //
        // jsonResponses contains the results of two API requests
        //
       
        //
        // 1. combine the results of these requests

          var completed_request = 0;
          var urls = ['https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=4', 'https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=5'];
          // create a loop to get response
          urls.forEach(function (fourStarUrl){
            https.get('data', function(res){
              res.on('data', function(dispatch){
                jsonResponses.push(dispatch);
              });
            });
          })

          var urls = ['https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=4', 'https://itunes.apple.com/search?country=us&media=movie&entity=movie&limit=100&attribute=ratingIndex&term=5'];
          urls.forEach(function (fiveStarUrl){
            https.get('data', function(res){
              res.on('data', function(dispatch){
                jsonResponses.push(dispatch);
              });
            });
          })  

          /* async getPopularMovies() {
              try {
                let response = await fetch(urls);
                let jsonResponses = await res.json();
                return jsonResponses.movies;
              }       
              catch(error) {
                console.error(error);
              }
          }*/
          res.on('end', function(){
            if(completed_request++ == urls.length - 1){
              // download status to complete and join the responses
              console.log('body:', jsonResponses.join());
          }
        })
          //response and combine the request

        // 2. sort the results FIRST by year THEN by title (trackName)

        //create function for movie mapping for html page
        function MoviesList({ movies }) {
          return (
            <table>
            <tr>
              {movies.map((m, i) =>
              <td key={i}>{m.releaseYear} - ({m.trackName}) </td>
              )}
            </tr>
            </table>
            );
        }
        //export the movie list by default way
        //export default connect(mapStateToProps)(MoviesList);

        function getVisibleMovies(releaseYear, trackName, sorting, movies) {
          return movies
            .filter(m => {
              return (
                (releaseYear == 'all' || releaseYear == m.releaseYear) &&
                (trackName == 'all' || trackName == m.trackName) 
              );
          })
          //sorting by release year and by title(trackname)
          //sorting by release year
          .sort((req1, req2) => {
            if (sorting == 'releaseYear') {
               return req2.releaseYear - req1.releaseYear;
             }
             //sorting by title (trackname)
            if (sorting == 'trackName') {
              return req2.trackName - req1.trackName;
             }
        });
      }

    //display result by release year and title(trackname) after sorting completes
    function mapStateToProps(state) {
      const { releaseYear, trackName, sorting, movies } = state;
        return {
          movies: getVisibleMovies(releaseYear, trackName, sorting, movies),
        };
    }
    //export the movie list, connect with database and malke it make it defult way for nexttime page load
    //export default connect(mapStateToProps)(MoviesList);

        // 3. each movie object in the results needs a releaseYear attribute added
        //    this is used in src/components/movies-list.js line 26
        
        // create a function to load styles from css and render the movie name with released year
        function renderMovie(movie) {
          return (
            <View style={styles.container}>
                <View style={styles.rightContainer}>
                  <Text style={styles.releaseYear}>{movie.trackName}</Text>
                  <Text style={styles.releaseYear}>{movie.releaseYear}</Text>
                </View>
           </View>
           );

        
        }
      }
      const combinedResults = []
      
     /* return dispatch(
        type: 'GET_MOVIES_SUCCESS',
        movies: combinedResults
        )
        }
        }
*/
      // to render application component at the end
      React.render(<App />, document.getElementById('app'));    

