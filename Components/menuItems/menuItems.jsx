import React from 'react'
import {Content, Subtitle, MenuItem, Title, BackgroundImage } from './menuItemStyleComponents'




const menuItems =({title, id, image, size}) => {
    return (
      <MenuItem className={`${size}`}>
          <BackgroundImage className='background-image' style={{
              backgroundImage: `url(${image})`,
          }}>
       <Content>
           <Title>
                 {title}
           </Title>
           <Subtitle>
                   Shop Now
           </Subtitle>
       </Content>
       </BackgroundImage>
      </MenuItem>
    )
}

export default menuItems
