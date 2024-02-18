import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProducerUploadPage() {
  const navigate = useNavigate();
  const [beatName, setBeatName] = useState('');
  const [selectedGenres, setSelectedGenres] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleGenreSelection = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedGenres(e.target.value);
  };

  const handlePrivacyToggle = () => {
    setIsPrivate(!isPrivate);
  };

  const handlePriceChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPrice(e.target.value);
  };

  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleUpload = () => {
    // Check if required fields are filled
    // if (beatName && selectedGenres && selectedFile) {
    //   // Proceed with the upload process
    //   // You can add your logic here
    // } else {
    //   // Prompt the user to fill in the required fields
    //   alert('Please fill in all the required fields.');
    // }
  };

  return (
    <div className="container relative h-screen flex items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
          <div className="mt-4">
            <h1 className="text-4xl text-center mb-6">Upload Beats</h1>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label className="text-lg">What is the name of your beat?<span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="text"
                  value={beatName}
                  onChange={(e) => setBeatName(e.target.value)}
                  placeholder="Enter beat name"
                  className="p-2 text-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-lg">Genres<span style={{ color: 'red' }}>*</span></Label>
                <select
                  className="block w-full p-2 border border-gray-300 rounded-md text-lg"
                  onChange={handleGenreSelection}
                  value={selectedGenres}
                >
                  {/* <option value="">Select Genre</option> */}
                  <option value="Hip-Hop Beats">Hip-Hop Beats</option>
                  <option value="Pop beats">Pop beats</option>
                  <option value="Electronic Beats">Electronic Beats</option>
                  <option value="R&B beats">R&B beats</option>
                  <option value="Rock beats">Rock beats</option>
                  <option value="Reggae beats">Reggae beats</option>
                  <option value="Trap Beats">Trap Beats</option>
                  <option value="Dance beats">Dance beats</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label className="text-lg">Privacy</Label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-blue-600"
                    onChange={handlePrivacyToggle}
                    checked={isPrivate}
                  />
                  <span className="ml-2 text-lg">Private</span>
                </div>
              </div>
              {isPrivate && (
                <div className="grid gap-2">
                  <Label className="text-lg">Price (in IND)<span style={{ color: 'red' }}>*</span></Label>
                  <Input type="number" value={price} onChange={handlePriceChange} className="p-2 text-lg" />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Label className="text-lg">Upload Beat File<span style={{ color: 'red' }}>*</span></Label>
                <input type="file" accept=".mp3,.wav" onChange={handleFileChange} className="p-2 text-lg" />
              </div>
              <Button className="w-full text-lg" onClick={handleUpload}>Upload</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}