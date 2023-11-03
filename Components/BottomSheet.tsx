import { View, Text, Button } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";

import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);

    const renderBackdrop = useCallback((props: any) => (
        <BottomSheetBackdrop 
            {...props}
            appearsOnIndex={0} 
            disappearsOnIndex={-1}
        />
    ), []);

    const {dismiss} = useBottomSheetModal();

    return (
        <BottomSheetModal 
            ref={ref} 
            snapPoints={snapPoints}
            overDragResistanceFactor={0}    
            backdropComponent={renderBackdrop}
        >
            <View>
                <Text>BottomSheet</Text>
                <Button title="Dimiss" onPress={() => dismiss()}></Button>
            </View>
        </BottomSheetModal>
    );
})
 
export default BottomSheet;