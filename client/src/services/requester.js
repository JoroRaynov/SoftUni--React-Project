async function requester(method, url, data) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            }
            options.body = JSON.stringify(data);
        }
    }

    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.token?.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.token.accessToken,
            };
        }
    }
 

    const response = await fetch(url, options);
    if (response.status === 400) {
        const result = await response.json();
        return result;
    }
    try {

        const result = await response.json();
        return result;
    } catch (e) {
        console.log('Error: ' + e);
    }

}

export const get = requester.bind(null, 'GET');

export const post = requester.bind(null, 'POST');

export const put = requester.bind(null, 'PUT');

export const patch = requester.bind(null, 'PATCH');

export const remove = requester.bind(null, 'DELETE');
