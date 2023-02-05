import axios from "axios";

const state = {
    slides: [],
    time: 5*60*1000
}

const mutations = {
    SET_SLIDES(state, slides) {
        state.slides = slides
    }
}

const actions = {
    async getSlides({ state, commit }) {
        const getFullCookieJSON = document.cookie.match(/slides=(.+?)(;|$)/)
        if (getFullCookieJSON) {
            let arrSlidesJSON = getFullCookieJSON[1]
            commit('SET_SLIDES', JSON.parse(arrSlidesJSON))
        } else {
            let slides = []
            do {
                let res = await axios.get('https://random.dog/woof.json')
                if(!res.data.url.includes('.mp4') && !res.data.url.includes('.gif')) {
                    slides.push(res.data.url)
                }
            } while (slides.length <10)
            commit('SET_SLIDES', slides)
            const setCookie = JSON.stringify(slides);
            document.cookie = 'slides=' + setCookie + '; max-age=' + state.time
        }
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}