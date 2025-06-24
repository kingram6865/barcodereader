import { addFood } from "@/api/retail";
import InputFormRetail, { FormValues } from "@/components/InputFormRetail";
import { CameraView } from "expo-camera";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showIsbnScanner, setShowIsbnScanner] = useState(false);
  const [showRetailScanner, setShowRetailScanner] = useState(false);
  // const [scannedData, setScannedData] = useState<Record<string, any> | null>(null);

  const { 
    control, handleSubmit, getValues, formState: { errors }, reset 
  } = useForm<FormValues>({ 
    mode: 'onChange', 
    defaultValues: { 
      source: '',
      producer: '',
      brand: '',
      description: '',
      qimperial: 0,
      qimperialmeasure: '',
      qmetric: 0,
      qmetricmeasure: '',
      servings: 0,
      ssimperial: 0,
      ssimpmeasure: '',
      ssmetric: 0,
      ssmetmeasure: '',
      calories: 0,
      price: 0,
      pricedate: '',
      priceper: 0,
      notes: '',
    }, 
  })

  const onSubmit = async (data: FormValues) => {
    try {
    // console.log(`payload: ${JSON.stringify(data, null, 2)}`);
    const result = await addFood(data);
    // const result = await response.json();
    console.log(`(scan.tsx Line 47): ${JSON.stringify(result)}`);
    reset();
    setScanned(false);
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Failed to submit data. Please try again.');
    }
  }


  const handleIsbnScanned = async ({ type, data }: {type: string, data: string}) => {
    const bookTypes = ['32', '512']
    console.log('(list.tsx) [Line 12]: ', "\x1b[32m\x1b[1m=============================================\x1b[0m\n");
    setScanned(true);
    setShowIsbnScanner(false);
    const code = data
    alert(`Bar code with type ${type} and isbn ${data} has been scanned!`);
    // const bookData = await getBooksByISBN(code)
    // console.log(bookTypes.includes(type.toString()), bookData.totalItems)
    // let restrictions = [bookTypes.includes(type.toString()), (bookData.totalItems > 0)]
  };

  const handleRetailScan = async ({ type, data }: { type: string, data: string }) => {
    setShowRetailScanner(false);
    const parsed = { type, data }

    alert(`Retail Bar code with type ${type} and UPC ${data} has been scanned!`);
    const values = getValues()

    setScanned(true);
    const payload = {
      ...values,
      scannedData: parsed
    }

    handleSubmit(() => onSubmit(payload))();
  };

  return (
    <View style={styles.container}>
      {showIsbnScanner && <CameraView
        onBarcodeScanned={scanned ? undefined : handleIsbnScanned}
        style={StyleSheet.absoluteFillObject}
      />}
      {showRetailScanner && <CameraView
        onBarcodeScanned={scanned ? undefined : handleRetailScan}
        style={StyleSheet.absoluteFillObject}
      />}
      <Text style={styles.text}>Scan Info</Text>
      <View style={styles.formContainer}>
        <InputFormRetail control={control} errors={errors} />
        <TouchableOpacity style={styles.fab2} onPress={() => {setShowRetailScanner(true); setScanned(false)} }>
          <Text style={styles.fabIcon}>Retail</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.fab} onPress={() => setShowIsbnScanner(true)}>
          <Text style={styles.fabIcon}>Book</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    alignContent: 'space-evenly'
  },
  fab: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    left: 10,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  fab2: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 18,
    color: 'blue',
  },
});
