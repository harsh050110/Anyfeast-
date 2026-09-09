#include<stdio.h>
#include<string.h>

int main(){
    char str[100];
    int i, flag =1;

    printf("Enter a string: ");
    scanf("%s", str);

    /* check for a* */
    for(i=0; str[i]!='\0'; i++){
        if(str[i] != 'a'){
            flag = 0;
            break;
        }
    }
    if (flag)
        printf("String is accepted under a*\n");
    else if(strcmp(str,"abb")==0)
        {
            printf("String is accepted under abb\n");
        }else
        {
            printf("String is not accepted\n");
        }
        return 0;
}