const isLogged = true;

const myNewPromise = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user == true) {
                resolve(Math.random());
            } else {
                reject("User not logged in");
                /* reject(new Error("User not logged in")) */
            }
        }, 500)
    })

}

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject("Number too low");
                /* reject(new Error("Number too low")) */
            }
        }, 1000);
    })
}

myNewPromise(isLogged)
    .then((num) => {
        console.log(num);
        return num;
    })
    .then((num) => secondPromise(num))
    .then((obj) => console.log(obj))
    .catch((err) => console.error(err))