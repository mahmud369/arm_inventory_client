import store from '@/store';
import axios from 'axios';

store.subscribe((mutation) => {
    //console.log(mutation)
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if(mutation.payload !== null){
                axios.defaults.headers.common['Authorization'] = `bearer ${mutation.payload}`;
                localStorage.setItem('auth_token', mutation.payload);
            } else {
                axios.defaults.headers.common['Authorization'] = null;
                localStorage.removeItem('auth_token');
            }
            break;
    }
});