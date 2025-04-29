import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import HomeViewer from '../../Viewer/Home/HomeViewer';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeController: React.FC<IProps> = ({navigation}) => {
  return <HomeViewer navigation={navigation} />;
};

export default HomeController;
