import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utills/color'

const Test = () => {

    // It is an example where i have craeting some circle on button click and when user click on those circle color has been change for the circle (gray for select and transparent for unSelectd)

    const [circle,setCircle] = useState([]);
    const [isselect,setIsselect] = useState(0)

    const addCircle = () =>{
        const newCircle = [...circle];
        newCircle.push({id:circle.length+1,isSelect:false})
        setCircle(newCircle);
    }

    const toggleCircleColor = (id) => {
        const updatedCircles = circle.map((circle) => {
          if (circle.id === id) {
            return { ...circle, isSelect: !circle.isSelect };
          }
          return circle;
        });
        if(updatedCircles.length > 0){
            const filter = updatedCircles.filter((item)=> item?.isSelect === true);
            setIsselect(filter.length);
        }
        setCircle(updatedCircles);
      };

    const RenderItem = ({item,index}) =>{
        return(
            <Pressable onPress={()=>toggleCircleColor(index+1)} style={{width:100,height:100,borderRadius:50,backgroundColor:item?.isSelect?"gray":"white"}} />
        )
    }

  return (
    <SafeAreaView style={{backgroundColor:colors.black,flex:1,alignItems:"center",paddingTop:100}}>
        <Text onPress={addCircle} style={{padding:10,color:colors.white,backgroundColor:colors.blurGrey}}>Add Circle {isselect}</Text>
        <FlatList
            style={{marginTop:10}} 
            data={circle}
            renderItem={RenderItem}
            ItemSeparatorComponent={<View style={{height:10}} />}
        />

    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({})