class Solution {
    public String solution(String[] storage, int[] num) {
        int num_item = 0;
        String[] clean_storage = new String[storage.length]; //storage = ["apple", "steel", "leaf", "apple", "leaf"]
        int[] clean_num = new int[num.length];              //num = [5, 3, 5, 3, 7]

                                                            //clean_storage = []
                                                            //clean_num =[]
        
        for(int i=0; i<storage.length;/*i=3*/i++){
            int clean_idx = -1;
            for(int j=0; j<num_item; j++){ //i=3, j=0
                if(storage[i].equals(clean_storage[j])){
                    clean_idx = j; //j=0
                    break;
                }
            }
            if(clean_idx == -1){
                clean_storage[num_item] = storage[i]; //clean_storage = ["apple"] //clean_storage = ["apple", "steel","leaf"]
                clean_num[num_item] = num[i];         //clean_num =[5] //clean_num = [5,3,5]
                num_item += 1;                        //num_item = 3
        
            else{
                clean_num[clean_idx] += num[i]; //clean_num -> 5 + num -> 3
            }
        }
        
        // 아래 코드에는 틀린 부분이 없습니다.
        
        int num_max = -1;
        String answer = "";
        for(int i=0; i<num_item; i++){ //clean_num = [9,1], clean_storage = ["pencil", "book"]
            if(clean_num[i] > num_max){
                num_max = clean_num[i]; //num_max = 9
                answer = clean_storage[i]; //answer = "pencil"
            }
        }
        return answer;
    }
}