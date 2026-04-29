public class rail {

    
    public static String encrypt(String text, int key) {
        if (key <= 1) return text;

        StringBuilder[] rail = new StringBuilder[key];
        for (int i = 0; i < key; i++) {
            rail[i] = new StringBuilder();
        }

        int row = 0;
        boolean down = true;

        for (char c : text.toCharArray()) {
            rail[row].append(c);

            if (row == 0) down = true;
            else if (row == key - 1) down = false;

            row += down ? 1 : -1;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder r : rail) {
            result.append(r);
        }

        return result.toString();
    }


    public static void main(String[] args) {
        String text = "HELLOWORLD";
        int key = 3;

        String encrypted = encrypt(text, key);
        System.out.println("Encrypted: " + encrypted);

    }
}