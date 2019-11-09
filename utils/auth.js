import Router from 'next/router'
import nextCookie from 'next-cookies'
import axios from 'axios';

import constants from '../constants';

export const auth = ctx => {
    const { token } = nextCookie(ctx)
    console.log('auth token check before url', token)
    console.log('pathname', ctx.pathname)
    console.log('query', ctx.query)

    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/artist/login' })
        ctx.res.end()
        return
    }

    if (!token) {
        
        Router.push('/artist/login')
        return
    }

    // if (ctx.req) {
    //     axios.get(constants.serverUrl + 'api/users/me', { headers: { 'Authorization': token } })
    //     .then((response) => {
    //         console.log('in auth users/me response server side');
    //         // console.log('in auth artists/me response', response)
    //         if(response.data.user.client == 'client') {
    //             ctx.res.writeHead(302, { Location: '/search' })
    //             ctx.res.end()
    //         }

    //         else if(response.data.user.role == 'artist' && response.data.user.has_profile == false) {
    //             ctx.res.writeHead(302, { Location: '/artist/create-profile' })
    //             ctx.res.end()
    //         }
    //         else {
    //             ctx.res.writeHead(302, { Location: '/artist/profile' })
    //             ctx.res.end()
    //         }

            
    //     })
    //     .catch((error) => {
    //         ctx.res.writeHead(302, { Location: '/' })
    //         ctx.res.end()
    //     });
    //     return
    // }

    // console.log('client route')
    // axios.get(constants.serverUrl + 'api/users/me', { headers: { 'Authorization': token } })
    // .then((response) => {
    //     console.log('in auth users/me response client  side');
    //     //console.log('in auth artists/me response', response)
    //     if(response.data.user.client == 'client') {
    //         ctx.res.writeHead(302, { Location: '/search' })
    //         ctx.res.end()
    //     }

    //     else if(response.data.user.role == 'artist' && response.data.user.has_profile == false) {
    //         ctx.res.writeHead(302, { Location: '/artist/create-profile' })
    //         ctx.res.end()
    //     }
    //     else {
    //         ctx.res.writeHead(302, { Location: '/artist/profile' })
    //         ctx.res.end()
    //     }
    // })
    // .catch((error) => {
    //     Router.push('/')
    // });
  
    
    return token
}