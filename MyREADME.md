# Creating New Project with React Native CLI

* 1. New project starting command: 
* npx react-native@latest init projectname

* 2. Alaway start the new project without any changes.

* 3. when new project not start with error ' could not move the temporary workspace'. then change the version of girdle from 6 to 5(android=>gradle=>wrapper=>gradle-wrapper-properties)

* 4. After first start of project then install libraries

* 5. Navigation: 
i. yarn add @react-navigation/native
ii. yarn add react-native-screens react-native-safe-area-context
iii. also edit this file (MainActivity.kt or MainActivity.java) in this path (android/app/src/main/java/<your package name>/)
iv. Also add this (import android.os.Bundle;) at the top of this file
v. then go to next page of react navigation and install this (yarn add @react-navigation/native-stack)

* 6. For clearing cache: (yarn start --reset-cache
)


# What is Redux?
* Is a global state management, useState ko hum sirf usi component may use kr saktay hay jis may hum nay usay bnaya ho matlab sirf aik component may hi used kr saktay hay. lakin Redux ko hum pori app may khain bhi use kr saktay hay access kr saktay hay.

# Redux                                         Redux Toolkit
* less efficient                                * more efficient
* is may phlay bohat zayada line of code        * is may setup hay wo minimum kr 
krna prta tha                                     deya hay
* kafi sari cheezain mannually handle krni      * manually wali cheezain sari redux 
prti thi.                                         toolkit khud handle kr rha hota 
                                                  hay
                                                * is nay cheezon ko assan kr deya hay or samaghnay bhi essay hay.

# How do we used Redux Toolkit ?
* Hamaray pass bohat saray reducers hotay hay, e.g: auth reducer, jis may user ka data hay or login function us kay ander hay, ab wo jo data hay hum usay store kay ander bhejatay hay. jitnay bhi reducers hay un sab ka data hum store kay ander store krwa detay hay. (aik store hota hay, us may saray reducers hotay hay or us may saray data available hota hay. us reducer ki value update krnay kay leyee store may hum dispatch use krtay hay, or us value ko get krnay kay leyee useSelector ko used krtay hay)

* It gives 2 hooks

* i. useDispatch(): used for udating reducer value. (is say hum value update krwatay hay)

* ii. useSelector(): used for getting value from store. (is say hum value get krtay hay)