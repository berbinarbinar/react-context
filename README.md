# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Cara pakai context secara mantap

1. bikin folder contexts untuk menampung si contextnya apa?
2. bikin file TerserahContext.js atau misal ProductContext.js
3. didalam file ProductContext.js kita inisiasi si contextnya terlebih dahulu, dengan beberapa baris kode dan jangan lupa di export

```js
import { createContext } from "react";
export const ProductContext = createContext(); // ini buat bikin context
```

4. lalu kita perlu untuk membuat sebuah component wrapper di dalam file yang tadi dimana fungsinya adalah kita bisa menjadikan component wrapper ini sebagai Provider yang diperlukan apabila si komponen memerlukan context ini, dengan cara

```js
const ProductProvider = ({ children }) => {
  const [jokowiObj, setJokowiObj] = useState({
    url: "https://cdn-brilio-net.akamaized.net/news/2017/12/28/136783/thumbnail-7-momen-jokowi-sukses-curi-perhatian-di-tahun-2017-171228c.jpg",
    title: "Bapakku lagi mancing",
    desc: "Iya bapakku lagi mancing di laut seru bgt",
  });
  return (
    <ProductContext.Provider value={jokowiObj}>
      {" "}
      // nanti jadi Provider
      {children} // return semua child component yang ada diantara provider
    </ProductContext.Provider>
  );
};
```

dan jangan lupa di export filenya

```js
export { ProductContext, ProductProvider };
```

5. Di dalam root file, atau di file index.js kita perlu import si provider yang telah dibuat tadi, lalu kita bungkus Child component yang ada dengan Provider tadi.
6. Untuk mengambil data state yang tersedia di context yang telah di store tadi. Pada komponen yang ingin memakai, bisa langsung diambil saja datanya dengan menggunakan hooks yaitu useContext. Pertama tama import dulu si Contextnya lalu dipakai dimasukan kedalam parameter useContext

```js
import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const tampunganObj = useContext(ProductContext);
```

7.
