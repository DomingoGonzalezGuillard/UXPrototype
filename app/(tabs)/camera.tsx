import React, { useState, useEffect } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraView } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facing, setFacing] = useState<'front' | 'back'>('back');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Pressable style={{ margin: 20 }} onPress={toggleCameraFacing}>
            <Text style={{ color: 'white', fontSize: 20 }}>Flip Camera</Text>
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
}
