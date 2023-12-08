import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { Font } from '@react-pdf/renderer'
import KanitReguler from '../../assets/font/Kanit-Regular.ttf';
import KanitBold from '../../assets/font/Kanit-Bold.ttf'
import { Constant } from '../../utils/Constant';

function PdfView({project, section}) {
    Font.register({
        family:'KanitReguler',
        src:KanitReguler
    })
    Font.register(
        {
            family:'KanitBold',
            src:KanitBold
        }  )

    const styles = StyleSheet.create({
        main:{
            
        },
        section:{
            textAlign:'center',
            fontSize:32,
            fontFamily:'KanitBold'
        },
        subSection:{
            fontSize:20,
            fontFamily:'KanitBold',
            textDecoration:'underline',
            // paddingHorizontal:10,
            textAlign:'center'
        },
        subSectionContainer:{
            marginVertical:10
        },
        subSubSection:{
            fontSize:18,
            fontFamily:'KanitBold',
            paddingHorizontal:20
        },
        subSubSectionContainer:{
            marginBottom:20
        },
        question:{
            fontSize:12,
            fontFamily:'KanitBold',
            paddingHorizontal:30
        },
        answer:{
            fontSize:12,
            fontFamily:'KanitReguler',
            paddingHorizontal:30
        }
    })

    
  return (
    <Document >
            <Page style={styles.main}>
                <Text style={styles.section}>{section}</Text>
                {project.length > 0 &&(<View>
                    {project.map((item,index) => {
                        return(
                        <View style={styles.subSectionContainer}>
                            <Text style={styles.subSection}>{Constant[Object.keys(project[index])]}</Text>
                            {item[Object.keys(project[index])].map((subSubSection, indexes) => {
                                return(
                                    <View style={styles.subSubSectionContainer}>
                                        <Text style={styles.subSubSection}>{Constant[Object.keys(subSubSection)[0]]}</Text>
                                        {subSubSection[Object.keys(subSubSection)[0]].map((question, indexxx) => {
                                            return(
                                                <View>
                                                    <Text style={styles.question}>{question.question}</Text>
                                                    <Text style={styles.answer}>{question.answer}</Text>
                                                </View>
                                            )
                                        })}
                                        
                                    </View>
                                )
                            })}
                        </View>
                        )
                    })}
                    </View> 
                )}
                

            </Page>
    </Document>
  )
}

export default PdfView