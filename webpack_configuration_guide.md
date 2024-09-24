
# Webpack Configuration - Step-by-Step Guide

This guide walks you through the steps to solve the Webpack configuration task.

## Step 1: Entry Point
Specify the entry file as `index.coffee` located in the `src` folder.

```js
entry: './src/index.coffee',
```

## Step 2: Output Configuration
Specify the output file in the `public` folder with the name `build.js`.

```js
output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
}
```

## Step 3: Loaders
Set up loaders to handle specific file types:
1. `coffee-loader` for `.coffee` files, excluding `node_modules`.
2. `style-loader` and `css-loader` for `.css` files.

```js
module: {
    rules: [
        {
            test: /\.coffee$/,
            use: 'coffee-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```

## Step 4: Plugins
Use `HtmlWebpackPlugin` to generate an HTML file and specify the template as `index.html` located in the `public` folder.

```js
plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
]
```

## Step 5: devServer Configuration
Configure the development server to run on port `8000`, allow all hosts, and serve static files from the `public` folder.

```js
devServer: {
    port: 8000,
    allowedHosts: 'all',
    static: path.resolve(__dirname, 'public')
}
```

## Step 6: Mode
Set the Webpack mode to `development`.

```js
mode: 'development'
```

## Step 7: Resolve Configuration
Add `descriptionFiles` with `package.json` in the array.

```js
resolve: {
    descriptionFiles: ['package.json']
}
```

## Step 8: Optimization
Enable `mergeDuplicateChunks` to optimize the build.

```js
optimization: {
    mergeDuplicateChunks: true
}
```

## Complete Webpack Configuration File

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.coffee',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: 'coffee-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 8000,
        allowedHosts: 'all',
        static: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    resolve: {
        descriptionFiles: ['package.json']
    },
    optimization: {
        mergeDuplicateChunks: true
    }
};
```

## Instructions to Run:
1. **Run -> Install** to install the necessary packages.
2. **Run -> Run Server** to start the server.
3. **Run -> Preview App** to launch the app on the browser.
4. **Run -> Test** to test your application.
5. **Submit Code** followed by **Submit Test** to finalize the submission.
