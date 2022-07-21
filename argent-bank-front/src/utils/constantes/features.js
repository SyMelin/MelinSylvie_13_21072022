import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const chat = {
    icon: iconChat,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    paragraphe: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
}

const money = {
    icon: iconMoney,
    alt: "Money Icon",
    title: "More savings means higher rates",
    paragraphe: "The more you save with us, the higher your interest rate will be!"
}

const security = {
    icon: iconSecurity,
    alt: "Security Icon",
    title: "Security you can trust",
    paragraphe: "We use top of the line encryption to make sure your data and money is always safe."
}


export const featureItems = [
    chat,
    money,
    security  
]