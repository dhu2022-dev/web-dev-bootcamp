  1 /**
  2  * CS2130 Lab 12 - Spring 2023 - Memory Errors
  3  *
  4  * Our Trivia game is fun!  But, we should have been more careful
  5  * with memory!  Fix the memory errors so that you, too, can play
  6  * a game of trivia.
  7  */
  8
  9 #include <stdio.h>
 10 #include <stdlib.h>
 11 #include <string.h>
 12 #include <time.h>
 13 #include "trivia.h"
 14
 15 // Global variable
 16 questionData questions[10];
 17
 18 void requestName(char *name) {
 19
 20     // Prompt the user and read input
 21     puts("Please enter your name:");
 22     fgets(name, 100, stdin);
 23     
 24     // remove new line (\n) from the user's input (the next 3 lines are correct)
 25     for (int i = 0; i < strlen(name); i++)
 26         if (name[i] == '\n')
 27             name[i] = '\0';
 28 }
 29
 30 int seedRandomNumber() {
 31     // Create a weird array and don't do anything with it
 32     char buffer[100];
 33     buffer[0] = 0;
 34     strcat(buffer, "[This is strange]");
 35
 36     // Seed the random number with the current time
 37     // Note: This line is correct (and needed) for a good Trivia experience
 38     srand(time(NULL));
 39
 40     return strlen(buffer);
 41 }
 42
 43 char shufflePointers(void **ptrs, size_t n) {
 44     // If n is not positive, then don't shuffle anything
 45     if (n <= 0)
 46         return 0;
 47
 48     // Save the first pointer
 49     void *first = *ptrs;
 50
 51     // Shuffle the array of pointers
 52     for (size_t i = 0; i < n-1; i++) {
 53         size_t randomNumber = (size_t) rand();
 54         size_t randomIndex = i + (randomNumber / (RAND_MAX / (n - i) + 1));
 55         
 56         void *tmp = ptrs[randomIndex];
 57         ptrs[randomIndex] = ptrs[i];
 58         ptrs[i] = tmp;
 59     }
 60
 61     // Find the original first pointer
 62     size_t k = 0;
 63     while (ptrs[k] != first)
 64         k++;
 65
 66     // Return an upper-case character value (A-D)
 67     return (char) (0x41 + k);
 68 }
 69
 70 void shuffleQuestions(int numQuestions) {
 71     // If numQuestions is not positive, then don't shuffle anything
 72     if (numQuestions <= 0)                                                                                                        trivia.c                                                                                                                     
 73         return;
 74
 75     // We need the size of a questionData struct. It's 17 (2 pointers and a char)
 76     size_t questionSize = 17; 
 77
 78     // Shuffle the array of question structs 
 79     for (size_t i = 0; i < numQuestions-1; i++) {
 80         size_t randomNumber = (size_t) rand();
 81         size_t randomIndex = i + (randomNumber / (RAND_MAX / (numQuestions - i) + 1));
 82         
 83         questionData tmp;
 84         memcpy(&tmp, &questions[i], questionSize);
 85         memcpy(&questions[i], &questions[randomIndex], questionSize);
 86         memcpy(&questions[randomIndex], &tmp, questionSize);
 87     }
 88 }
 89
 90 int readTriviaQuestions(char *category, int numQuestions) {
 91     // Create the full path to the database file: the next 2 lines are correct
 92     char filepath[100];
 93     snprintf(filepath, 100, "/p/cso1/labs/trivia/data/%s", category);
 94
 95     // Open the file (assume file opens correctly: the next 3 lines are correct)
 96     FILE *data = fopen(filepath, "r");
 97     if (data == NULL)
 98         return nofile;
 99
100     // Read through the file
101     char buffer[4096];
102     int i = 0;
103     for (int i = 0; i < numQuestions; i++) {
104
105         // Request enough space for a questionData on the heap
106         questionData *question = malloc(17);
107
108         // Read question from the file
109         char *line = fgets(question->text, 4096, data); 
110
111         for (int j = 0; j < 4; j++) {
112             line = fgets(buffer, 4096, data);
113             question->answers[j] = line; // seems suspect, but we're at least getting the new line?
114         }
115
116         // Shuffle the possible answers so they are in a random order
117         question->correct = shufflePointers((void **) question->answers, 4);
118
119         // Now that we're done reading the question, we don't need it anymore
120         free(question);
121
122         // Copy the question to the array
123         memcpy(&questions[i], question, sizeof(questionData));
124     }
125
126     return readok; 
127 }
128
129 int main() {
130     int numQuestions = 30;
131     char category[10];
132     int gameLength = 0;
133    
134     // Welcome Statement 
135     puts("Hello and welcome to CSO1 Lab 12 Trivia!");
136     puts("We should have developed this better, but now it's up to you to fix our memory errors!");
137     puts("");
138     puts("Time to get started!");
139
140     // Ask the user's name
141     char name[100];
142     requestName(name);
143     seedRandomNumber(); // this is a strange function!
144
// Print a greeting, then let them know how many questions we're reading
146     printf("Hello %s! We'll now read %d questions from a category of your choice!\n\n", name, numQuestions);
147
148     // Ask for a category
149     puts("Enter a category to get started (computing or boardgames):");
150     fgets(category, 10, stdin);
151     // What happens if they enter something different?  Oops! 
152
153     // Load the questions -- do these numbers add up?
154     printf("Okay, %s, now loading %d questions to get started.\n\n", name, numQuestions);
155     int success = readTriviaQuestions(strtok(category, "\n"), numQuestions);
156
157     // Check that we were able to open the file and read the questions -- what is readok again?
158     if (success != readok) {
159         printf("An error occurred when reading the questions. Error code: %d", success);
160         return 1;
161     }
162
163     // Shuffle questions so that they are in a random order
164     shuffleQuestions(numQuestions);
165
166     // Ask how long of a game the user would like
167     puts("How many questions would you like to answer?:");
168    
169     char buffer[10];
170     fgets(buffer, 10, stdin);
171     sscanf(buffer, "%d", &gameLength);
172
173     // Play trivia!
174     char givenAnswer;
175     int correct;
176     for (int i = 0; i < gameLength; i++) {
177         // Print the question
178         printf("Question %d: %s\n", (i + 1), questions[i].text);
179         
180         // Print the 4 possible answers
181         for (int j = 0; j < 4; j++) {
182             printf("  %c. %s\n", (char) (0x41 + j), questions[i].answers[j]);
183         }
184
185         // Prompt the user for an answer and read one char
186         printf("\nAnswer: ");
187         fgets(buffer, 10, stdin);
188         sscanf(buffer, "%c", &givenAnswer);
189
190         // Check if they gave the right answer and update appropriately
191         if (givenAnswer == questions[i].correct) {
192             correct += 1;
193             puts("Correct!\n");
194         } else {
195             printf("Sorry, the answer was: %c\n\n", questions[i].correct);
196         }
197     }
198
199     // Print the final score
200     printf("\n\nYour Final Score: %d / %d\n", correct, gameLength);
201     
202     // Return that all went well
203     return 0;
204 }