
## First

  // react-native link
  //npm install --save react-navigation@3.0.1 后面指定版本
   - "react-native-gesture-handler": "^1.6.1",
   - "react-native-reanimated": "^1.8.0",
   - "react-native-screens": "^2.5.0",
   - "react-navigation": "^3.13.0"
   - "react-lifecycles-compat": "^3.0.4",
   - npm install prop-types --save 属性检测
   - npm install --save react-native-vector-icons icon


## ScrollableTabView使用
   - npm install react-native-scrollable-tab-view --save
   - yarn add @react-native-community/viewpager
## Android gradle
./gradlew clean 清理

## Android  react-native-vector-icons 

npm install react-native-vector-icons --save

第二步：分别为android和ios做一些相应的配置

Android：

在android/app/build.gradle中增加如下脚本：

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```
在node-modules 中找到
react-native-vector-icons库，将Fonts 文件夹拷贝到android/app/src/main/assets/fonts
如果没有assets/fonts 新建即可

在android/settings.gradle中增加如下脚本，
```
 include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
include ':react-native-vector-icons'的作用时在编译android项目的时候
react-native-vector-icons会作为一个module加入编译。

project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')是指定
react-native-vector-icons的具体路径

在 android/app/build.gradle
```

```
添加：compile project(':react-native-vector-icons')
apply plugin: 'com.android.application'
 
android {
  ...
}
 
dependencies {
  compile fileTree(dir: 'libs', include: ['*.jar'])
  compile "com.android.support:appcompat-v7:23.0.1"
  compile "com.facebook.react:react-native:+"  // From node_modules
  ....
  compile project(':react-native-vector-icons')
```