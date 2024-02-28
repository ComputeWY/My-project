public void put(Key k, Value v) {root = put(root, k, v);}

public Node put(Node n, key k, Value v) {
    if (n == null) {return new Node(k,v)};
    int t = n.getKey().compareTo(k);

    if(t > 0) {n.setLeft(put(n.getLeft(), k, v));}

    else if (t<0) {n.setRight(put(n.getRight(), k, v));}

    else {n.setValue(v);}

    return n;
}