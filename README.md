# react-native-practice
리액트 네이티브 연습

# Solved Issues

## 카카오 로그인 연동시 발생하는 키해시 관련 에러 
`invalid android_key_hash or ios_bundle_id or web_site_url`  
키해시를 등록했는데 위와 같은 에러가 발생.  
powershell이 아닌 cmd에서 keytool 명령을 실행하면 제대로 동작하는 해시를 얻을 수 있음. 원인은 아직 찾는 중  
본인이 vscode를 사용하고 있고, 이와 같은 에러를 마주하고 있다면 cmd로 프로젝트 루트에서  
`keytool -exportcert -alias androiddebugkey -keystore ./android/app/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64`를 수행하면 제대로 인증이 동작할 가능성이 높다.
