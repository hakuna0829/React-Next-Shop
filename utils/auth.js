import Router from 'next/router'
import nextCookie from 'next-cookies'
import axios from 'axios';

import constants from '../constants';

export const auth = ctx => {
    const { token } = nextCookie(ctx)
    console.log('token', token)
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
        axios.get(constants.serverUrl + 'api/artist/me', { headers: { 'Authorization': token } })
        .then((response) => {
            console.log('artist/me response', response)
            if(response.data.artist.has_profile == false)
            {
                ctx.res.writeHead(302, { Location: '/createProfile' })
                ctx.res.end()
            }
            this.setState({
                loading: false,
                artist: response.data.artist
            });
        })
        .catch((error) => {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
            this.setState({loading: false});
        });
        return
    }

    console.log('client route')
    axios.get(constants.serverUrl + 'api/artist/me', { headers: { 'Authorization': token } })
    .then((response) => {
        console.log('artist/me response', response)
        if(response.data.artist.has_profile == false)
        {
            Router.push('/createProfile') 
        }
        this.setState({
            loading: false,
            artist: response.data.artist
        });
    })
    .catch((error) => {
        Router.push('/')
        this.setState({loading: false});
    });
  
    
    return token
}