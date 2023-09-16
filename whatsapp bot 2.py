import pywhatkit
group=["EYRiuwYaFJzBH7QqZFUB9i"]
#phone_no=["+91 8698032179","+91 9004626446","+919221326883","+91 8857800823"]
phone_no=["+91 9821596279","+91 7709112035"]

for length in phone_no:
    pywhatkit.sendwhatmsg_instantly(length,"This ia a automated msg. from the bot created by Ritesh",
                                    14,18)

for grp_len in group:
    pywhatkit.sendwhatmsg_to_group_instantly(grp_len,"hello this is our marketing bot, pls vivit ",10)

#hrs="21"
#min="30"
#for length in phone_no:1hello this is our marketing bot, pls vivit 

    #pywhatkit.sendwhatmsg(length,"This ia a automated msg. from the bot created by Ritesh",hrs,min )

#for grp_len in group:
    #pywhatkit.sendwhatmsg_to_group_instantly(grp_len,"hello this is our marketing bot, pls vivit ",hrs,min)

#pywhatkit.sendwhats_image("+91 9221326883", "R:/promarketer project/pink sky.jpg", "Hello")