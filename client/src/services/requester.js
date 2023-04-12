async function requester(method, url, token, data) {

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
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    const response = await fetch(url, options);
    
    try {
        const result = await response.json();
        return result
    } catch (e) {
        console.log('ERRRRORR')
        console.log('Error: ' + e);
        // return {};
    }

}

export const get = requester.bind(null, 'GET');

export const post = requester.bind(null, 'POST');

export const put = requester.bind(null, 'PUT');

export const patch = requester.bind(null, 'PATCH');

export const remove = requester.bind(null, 'DELETE');
