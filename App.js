import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import { tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




export default function App() {
  return (
    <View>

      <View  style={styles.header}>
          <View style={styles.perfilhorizontal}>
          <Image style={styles.logo} source={require('./assets/logo.png')}/>
     
          </View>
      </View>

      <ScrollView horizontal={true} style={styles.stories}>
          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>

          <View style={styles.usuarioconjunto}>
            <Image style={styles.usuario} source={require('./assets/perfil.png')}/>
            <Text style={styles.usuarionome}>gabrielpires</Text>
          </View>
      </ScrollView>

      <ScrollView style={styles.body}>
      <View>
            <View style={styles.mensagem}>
              <View style={styles.horizontal}>
                <Image style={styles.imagem} source={require('./assets/perfil.png')}/>
                  <View style={styles.vertical}>
                    <Text style={styles.titulo}>gabrielpirescamargo</Text>
                    <Text style={styles.desc}>Localização</Text>
                    
                  </View>
                  
              </View>
              <Image source={require('./assets/foto.jpeg')}/>
              <View style={styles.deschorizontal}>
                <Image style={styles.iconedesc} source={require('./assets/equipe.png')}/>
                <Image style={styles.iconedesc} source={require('./assets/equipe.png')}/>
                <Image style={styles.iconedesc} source={require('./assets/equipe.png')}/>
              </View>
              <Text style={styles.likes}>600 curtidas</Text>
              <Text>
                <Text style={{fontWeight: "bold", color:'white'}}> gabrielpirescamargo</Text>
                <Text style={{ color:'white'}}> exemplo de descrição</Text>
              </Text>
  
              <Text style={styles.comentarios}>Ver todos os comentarios</Text>
              
            </View>


         

      </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.iconevertical}>
          <Image style={styles.iconeselecionado} source={require('./assets/sino.png')}/>
          <Text style={styles.footerdescselecionado}>Atividade</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/calendario.png')}/>
          <Text style={styles.footerdesc}>Calendário</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/equipe.png')}/>
          <Text style={styles.footerdesc}>Equipes</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/tarefas.png')}/>
          <Text style={styles.footerdesc}>Trabalhos</Text>
        </View>
        <View style={styles.iconevertical}>
          <Image style={styles.iconefooter} source={require('./assets/mais.png')}/>
          <Text style={styles.footerdesc}>Mais</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  likes:{
color:'white'

  },

  descricao:{
    color:'white'
  },

 comentarios:{
  color:'white'
  },
  iconedesc:{
    tintColor:'white',
    width:25,
    height:25,
    marginLeft: 10,
    marginTop: 10
  },
  deschorizontal:{
    flexDirection:'row'
  },
  usuarioconjunto:{
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:10
  },
  usuarionome:{
    color:'white'
  },
  usuario:{
    width:70,
    height:70
  },
  desc2:{
    fontSize:10,
    color:'#b3b3b3'
  },
  perfilhorizontal:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:50
    
  },
  feed:{
    color:'white',
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10
  },
  lupa:{
    width:20,
    height:20,
    marginLeft:10,
    tintColor: '#9b9b9b' 
  },
  pesquisarTexto:{
    color:'#9b9b9b',
    marginLeft:5
  },
  iconevertical:{
    alignItems:'center',
    justifyContent:'center',
    width:70
  },
  footerdesc:{
    paddingTop:3,
    fontSize:12,
    color:'#b3b3b3',
    fontSize:10
  },
  footerdescselecionado:{
    paddingTop:3,
    fontSize:12,
    color:'#7f85f5',
    fontSize:10
  },
  desc:{
    paddingTop:3,
    fontSize:14,
    color:'#b3b3b3'
  },

  titulo:{
    fontSize:14,
  
    color:'white'
  },
  horizontal:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
  vertical:{
    flexDirection: "column",
    flexWrap: "wrap",
    paddingTop:10,
    paddingLeft:10,
    width:'85%',
    height: 60
  },
  mensagem:{
    backgroundColor: '#000000',

   
   
  },
  imagem:{
    width:40,
    height:40,               
    marginLeft:10,
    marginTop:10,
  
    
  },
  logo:{
    width:120,
    height:40,
    marginLeft:20,
    tintColor:'white'
  
    
  },
  perfil:{
    width:35,
    height:35,
    marginLeft:20,
    
  
    
  },
  iconefooter:{
    width:20,
    height:20,
    tintColor: "#adadad",
  
    
  },
  iconeselecionado:{
    width:20,
    height:20,
 
    tintColor: "#7f85f5",
  
  
  },
  header: {
    backgroundColor: '#000000',
    height:'10.5%',

  },
  stories: {
    backgroundColor: '#000000',
    height:'11%',

  },

  pesquisar: {
    flexDirection: "row",
    backgroundColor: 'black',
    backgroundColor:'#2b2b2d',
    width:'95%',
    marginLeft:10,
    height:35,
    borderRadius: 7,
    alignItems:'center',
    marginTop:15
  },

  body: {
    backgroundColor: '#000000',
   height:'74.5%',
  },

  footer: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    height:'9.5%',
    paddingBottom:30,
    flexDirection: "row",
    borderTopColor: '#232323',
    borderTopWidth:1

  },
  fonte:{
  color:'white',


  marginLeft:10,
  flex:1,

  },
});