import Router from 'next/router'
import nextCookie from 'next-cookies'
import axios from 'axios';

import constants from '../constants';

export const auth = ctx => {
    const { token } = nextCookie(ctx)
    console.log('auth token check before url', token)
    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/login' })
        ctx.res.end()
        return
    }

    if (!token) {
        Router.push('/login')
        return
    }

    if (ctx.req) {
        axios.get(constants.serverUrl + 'api/artists/me', { headers: { 'Authorization': token } })
        .then((response) => {
            console.log('in auth artists/me response server side');
            // console.log('in auth artists/me response', response)
            if(response.data.artist.has_profile == false)
            {
                ctx.res.writeHead(302, { Location: '/artist/create-profile' })
                ctx.res.end()
            }
        })
        .catch((error) => {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
        });
        return
    }

    console.log('client route')
    axios.get(constants.serverUrl + 'api/artists/me', { headers: { 'Authorization': token } })
    .then((response) => {
        console.log('in auth artists/me response client  side');
        //console.log('in auth artists/me response', response)
        if(response.data.artist.has_profile == false)
        {
            Router.push('/artist/create-profile') 
        }
    })
    .catch((error) => {
        Router.push('/')
    });
  
    
    return token
}