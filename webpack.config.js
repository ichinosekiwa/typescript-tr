module.exports = {
  entry: {
    // 何をコンパイルするか
    bundle: './src/index.ts',
  },
  output: {
    // バンドルしたものをどこに出力するか
    path: `${__dirname}/dist`,
    // どんな名前のファイルで出力するか
    filename: '[name].js',
  },
  // 開発モード（ソースマップあり）　or プロダクションモード（圧縮された軽いファイル）
  mode: 'production',
  resolve: {
    // 拡張子を自動で認識させる
    extensions: ['.ts', '.js'],
  },
  devServer: {
    // ローカルサーバーで何を立ち上げるか
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    // .ts のファイルをts-loaderを使ってコンパイルする
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
