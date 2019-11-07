import React from 'react';


export default class Container extends React.Component {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {

    }

    async getUserAsync() {
        /* let response = await fetch(`https://api.github.com/users/${name}`);
         let data = await response.json()
         return data;*/
    }
}