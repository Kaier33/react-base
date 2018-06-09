```js
// withFetch.js
import React, { Component } from 'react';


const withFetch = (url) => (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                data: null,
            };
        }
        componentDidMount() {
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        loading: false,
                        data: res
                    });
                })
        }
        render() {
            if (this.state.loading) {
                return (
                    <div>loading</div>
                )
            } else {
                return <View data={this.state.data} />
            }
        }
    }
}

export default withFetch;
```
```js
//user.js
import React, { Component } from 'react';
import withFetch from '../hoc/withFetch';

const User = withFetch("https://randomuser.me/api/")(props => {
    return (
        <h1>{props.data.results[0].email} </h1>
    )
})
//重构前
// class User extends Component {
//     constructor() {
//         super();
//         this.state = {
//             loading: true,
//             user: null
//         };
//     }

//     componentDidMount() {
//         fetch('https://randomuser.me/api/')
//             .then(res => res.json())
//             .then(user => {
//                 this.setState({
//                     loading: false,
//                     user: user
//                 });
//             })
//     }

//     render() {
//         if (this.state.loading) {
//             return (
//                 <div>loading</div>
//             )
//         } else {
//             return (
//                 <h1>{this.state.user.results[0].email}</h1>
//             )
//         }
//     }
// }

export default User;
```
```js
//joke.js
import React, { Component } from 'react';
import withFetch from '../hoc/withFetch';

const Joke = withFetch('http://api.icndb.com/jokes/random/3')(props => {
    return (
        <div>
            {
                props.data.value.map(joke => (
                    <p key={joke.id}>{joke.joke}</p>
                ))
            }
        </div>
    )
})
//重构前
// class Joke extends Component {
//     constructor() {
//         super();
//         this.state = {
//             loading: true,
//             jokes: null
//         };
//     }

//     componentDidMount() {
//         fetch('http://api.icndb.com/jokes/random/3')
//             .then(res => res.json())
//             .then(jokes => {
//                 this.setState({
//                     loading: false,
//                     jokes: jokes
//                 });
//             })
//     }

//     render() {
//         if (this.state.loading) {
//             return (
//                 <div>loading</div>
//             )
//         } else {
//             return (
//                 <div>
//                     {
//                         this.state.jokes.value.map(joke => (
//                             <p key={joke.id}>{joke.joke}</p>
//                         ))
//                     }
//                 </div>
//             )
//         }
//     }
// }

export default Joke;
```