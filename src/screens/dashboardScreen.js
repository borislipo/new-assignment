import React from 'react';
import {View, Image} from 'react-native';
import {dashboardStyles} from '../theme/dashboardTheme';


export const DashboardScreen = () => {
  return (
    <View style={dashboardStyles.container}>
      <View style={dashboardStyles.imageContainer}>
        <View style={dashboardStyles.imageView}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/drcoopxns/image/upload/v1649446502/safeAndSoundLogo_owfs6w.png',
          }}
          style={{ width: 200, height: 180}}
        />
      </View>
      </View>
      <View style={dashboardStyles.dashboardBlank}/>
    </View>
  );
};
