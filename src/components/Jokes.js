import React, {Component} from 'react';

const Joke = props => {
    const{ setup, punchline} = props.joke
    return (
                <p>{setup} <em>{punchline}</em></p>
            );
}

class Jokes extends Component {
    state = {joke : {}, jokes : []};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke : json  }))
        .catch(error => alert(error.message));
    }

    fetchJoke = () => {
        console.log(this.state.jokes)
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes : json }))
        .catch(error => alert(error.message));

    }

    render() {

        return(
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} key={this.state.joke} />
                <hr />
                <h3>Want ten new jokes</h3>
                <button onClick={this.fetchJoke}>Click me</button>
                {
                    this.state.jokes.map(joke => {
                        return (<Joke joke={joke} key={joke.id}/>);
                    })
                }
            </div>
        )
    }
}
export default Jokes;