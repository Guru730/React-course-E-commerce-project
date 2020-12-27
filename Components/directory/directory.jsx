import React, { Component } from 'react'
import MenuItem from '../menuItems/menuItems'
import './directoryStyles.css'


export class directory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            section: [ {
                title: 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            { 
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            { 
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large'
            },
            { 
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large'
            },

         ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({title, id, imageUrl, size}) => {
                        return <MenuItem title={title}  image={imageUrl} size={size}/>
                    })
                }
            </div>
        )
    }
}

export default directory
