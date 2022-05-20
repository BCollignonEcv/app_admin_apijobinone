import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/services/firebase.service'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore({
    id: 'User',
    state: () => useStorage('User', {
        user:  null,
    }),
    getters: {
        isLogged: (state) => {
            return state.user;
        },
        getUserName: (state) => {
            return state.user ? state.user.displayName : null;
        },
        getUserEmail: (state) => {
            return state.user ? state.user.email : null;
        },
    },
    actions: {
        loginUser(user) {
            this.user = user;
        },
        logoutUser() {
            this.user = null;
        },
        async signupUser(email, password, username) {
            return createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    return updateProfile(auth.currentUser, { displayName: username }).then(() => {
                        this.user = auth.currentUser;
                        return {
                            status: 'success',
                        };
                    })
                })
                .catch((error) => {
                    return {
                        status: 'failed',
                        code: error.code,
                        message: error.message
                    };
                })
        },
        async signinUser(email, password) {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    return {
                        status: 'success',
                    };
                })
                .catch((error) => {
                    return {
                        status: 'failed',
                        code: error.code,
                        message: error.message
                    };
                });
        }

    }
});