### Core concepts ####
- String[] arr = new String[size]
    - arr are stored in Stack memory at compile time
    - object for arr is stored in the Heap and it's created at runtime
    - each element in the array is also a reference variable to an object in some memory allocation in the heap determine by the jvm
    - arr maps to a collection of reference vars 
- Premitives: int, char, boolean, float...cannot be broken down into other data structures
- Non-premitives: String, array... complex data structures, can be broken down further...string can be broken down to chars and array into individual elements 

- Dyanamic Array
    - Arrays has size at initialization, but what if we don't know the size of the array beforehand
    - In this case, the jvm will handle the size of the array, and can take as many inputs
    - Arraylist is used. This is similar to Vectors in c lang
    - `ArrayList<Integer> list = new ArrayList<>();
    - How it works internally
        - list is stored in stack and point to the object in heap
        - Interestingly, how come size is not fixed and many unlimited elements can be added to the list?
            -  Internally, size is actually fixed under the hood :)
            - If the arraylist is filled to some threshold, say 60%, 
                - then, it will create a new array with, bigger size, say double the size, 
                - then copy the old elements into the new array, then delete the old array