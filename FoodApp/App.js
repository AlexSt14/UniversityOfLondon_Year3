import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function RestaurantsScreen({ navigation }) {

  const HomescreenCell = (props) => (
    <Cell {...props}
      highlightUnderlayColor={props.highlight}
      onPress={props.action}
      cellContentView={
        <View style={{ height: props.height, ...styles.container }}>
          <Image style={styles.image} source={props.imgUri} />
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.taglineText}>{props.tagline}</Text>
          <Text style={styles.etaText}>{props.eta}</Text>
        </View>
      }
    />
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}> 
        <ScrollView>
          <TableView>
            <Section header='' hideSeparator={true} sectionTintColor="#ccc">
              <HomescreenCell height={290} 
                              backgroundColor="transparent" 
                              highlight="#a3a3a3ff" 
                              title="Joe's Gelato" 
                              tagline="Desert, Ice cream, £££" 
                              eta="10-30 mins" 
                              imgUri={require('./images/ice-cream-header.jpg')}
                              action={() => navigation.navigate("Menu", { items: [{ "title":"Gelato", "contents":[{"title":"Vanilla", "price":"£3.99"}, {"title":"Chocolate", "price":"£3.99" }, {"title":"Mint", "price":"£3.99"}, {"title":"Strawberry", "price":"£3.99"}] }, {"title": "Waffles", "contents": [{"title": "Chocolate & Strawberry", "price":"£4.99"}, {"title": "Banoffee", "price":"£4.99"}]}, {"title": "Coffee", "contents": [{"title": "Flat white", "price":"£2.99"}, {"title": "Latte", "price":"£3.49"}, {"title": "Caffe Americano", "price":"£2.99"}]}] })}
              />
              <HomescreenCell height={290} 
                              backgroundColor="transparent" 
                              highlight="#a3a3a3ff" 
                              title="Burger Queen" 
                              tagline="Fast Food, Burgers, ££" 
                              eta="30-50 mins" 
                              imgUri={require('./images/beef-burger-cheese.jpg')}
                              action={() => navigation.navigate("Menu", { items: [{ "title":"Burgers", "contents":[{"title":"Beef Burger", "price":"£5.99"}, {"title":"Chicken Burger", "price":"£4.99" }, {"title":"Veggie Burger", "price":"£4.49"}, {"title":"Fish Burger", "price":"£5.49"}] }, {"title": "Coffee", "contents": [{"title": "Espresso", "price":"£2.99"}, {"title": "Latte", "price":"£3.49"}, {"title": "Caffe Americano", "price":"£2.99"}, {"title": "Cappuccino", "price":"£3.49"}]}, {"title": "Soft Drinks", "contents": [{"title": "Coke", "price":"£1.99"}, {"title": "Pepsi", "price":"£1.99"}, {"title": "Water", "price":"£0.99"}]}] })}
              />
              <HomescreenCell height={290} 
                              backgroundColor="transparent" 
                              highlight="#a3a3a3ff" 
                              title="Luigi's Italian" 
                              tagline="Italian, Pizza, £££" 
                              eta="35-60 mins" 
                              imgUri={require('./images/italian-restaurant.jpg')}
                              action={() => navigation.navigate("Menu", { items: [{ "title":"Pizza", "contents":[{"title":"Margherita", "price":"£5.99"}, {"title":"Pepperoni", "price":"£6.99" }, {"title":"Veggie", "price":"£6.49"}, {"title":"Hawaiian", "price":"£6.99"}] }, {"title": "Pasta", "contents":[{"title":"Spaghetti Bolognese", "price":"£7.99"}, {"title":"Penne Arrabiata", "price":"£6.99"}, {"title": "Lasagna", "price":"£7.49"}]}, {"title": "Coffee", "contents": [{"title": "Espresso", "price":"£2.99"}, {"title": "Latte", "price":"£3.49"}, {"title": "Caffe Americano", "price":"£2.99"}, {"title": "Cappuccino", "price":"£3.49"}]}, {"title": "Soft Drinks", "contents": [{"title": "Fanta", "price":"£1.99"}, {"title": "Pepsi", "price":"£1.99"}, {"title": "Water", "price":"£0.99"}, {"title": "San Pellegrino", "price":"£1.99"}]}] })}
              />
            </Section>
          </TableView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
    
    
  )
}

function MenuScreen({ route }) {
  const { items } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <TableView>
            { items.map((item, i) => (
              <Section key={i} header={item.title}>
                { item.contents.map((content, j) => (
                  <Cell key={j} title={content.title} 
                        cellStyle='RightDetail' detail={content.price} rightDetailColor="#ac0202ff"
                        onPress={() => alert(`Added ${item.title} ${content.title} - ${content.price} to basket`)} 
                        accessory="DisclosureIndicator"
                  />
                ))}
              </Section>
            ))}
          </TableView>
        </ScrollView>  
      </SafeAreaView>      
    </SafeAreaProvider>        
  )
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  etaText: {
    position: 'absolute',
    bottom: 45,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: 90,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  taglineText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  basketCell: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basketImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginBottom: 10,
  }
});
