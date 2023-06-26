
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { FirebaseDataProvider } from 'react-admin-firebase-01tek';
import { PostList } from "./posts";

const firebaseConfig = {
    apiKey: "AIzaSyBLBZOgDwzrEXItDI4uystFX-vlNgbO9CU",
    authDomain: "ostest1.firebaseapp.com",
    projectId: "ostest1",
    storageBucket: "ostest1.appspot.com",
    messagingSenderId: "188383882173",
    appId: "1:188383882173:web:eddcba0a780b12aecf80d4"
  };

  const options = {
    logging: true,
    watch: ["posts"]
  }
    const dataProvider = FirebaseDataProvider(firebaseConfig, options);


export const App = () => (
    <Admin dataProvider={dataProvider} >
        <Resource
          name="posts"
          list={PostList}
        />
    </Admin>
);

    